import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2 } from "lucide-react";

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [tools, setTools] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTool, setEditingTool] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "", slug: "", description: "", category: "Content", pricing: "Free",
    image_url: "", external_link: "", is_trending: false,
    features: "", pros: "", cons: ""
  });

  useEffect(() => {
    checkAdmin();
    loadTools();
  }, []);

  const checkAdmin = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      navigate('/auth');
      return;
    }

    const { data } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', session.user.id)
      .eq('role', 'admin')
      .single();

    if (!data) {
      toast({ title: "Access denied", description: "Admin only", variant: "destructive" });
      navigate('/');
    }
  };

  const loadTools = async () => {
    const { data } = await supabase.from('tools').select('*').order('created_at', { ascending: false });
    if (data) setTools(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toolData = {
      ...formData,
      features: formData.features.split('\n').filter(f => f.trim()),
      pros: formData.pros.split('\n').filter(p => p.trim()),
      cons: formData.cons.split('\n').filter(c => c.trim()),
    };

    if (editingTool) {
      const { error } = await supabase.from('tools').update(toolData).eq('id', editingTool.id);
      if (!error) toast({ title: "Tool updated" });
    } else {
      const { error } = await supabase.from('tools').insert(toolData);
      if (!error) toast({ title: "Tool created" });
    }

    setIsDialogOpen(false);
    setEditingTool(null);
    resetForm();
    loadTools();
  };

  const handleDelete = async (id: string) => {
    if (confirm("Delete this tool?")) {
      await supabase.from('tools').delete().eq('id', id);
      toast({ title: "Tool deleted" });
      loadTools();
    }
  };

  const resetForm = () => {
    setFormData({
      name: "", slug: "", description: "", category: "Content", pricing: "Free",
      image_url: "", external_link: "", is_trending: false,
      features: "", pros: "", cons: ""
    });
  };

  const openEditDialog = (tool: any) => {
    setEditingTool(tool);
    setFormData({
      ...tool,
      features: tool.features?.join('\n') || "",
      pros: tool.pros?.join('\n') || "",
      cons: tool.cons?.join('\n') || "",
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Panel</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}><Plus className="h-4 w-4 mr-2" />Add Tool</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingTool ? "Edit Tool" : "Add New Tool"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><Label>Name</Label><Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required /></div>
                  <div><Label>Slug</Label><Input value={formData.slug} onChange={(e) => setFormData({...formData, slug: e.target.value})} required /></div>
                </div>
                <div><Label>Description</Label><Textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><Label>Category</Label>
                    <Select value={formData.category} onValueChange={(v) => setFormData({...formData, category: v})}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["Education", "Coding", "Design", "Content", "Productivity", "Marketing"].map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div><Label>Pricing</Label>
                    <Select value={formData.pricing} onValueChange={(v) => setFormData({...formData, pricing: v})}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Free">Free</SelectItem>
                        <SelectItem value="Paid">Paid</SelectItem>
                        <SelectItem value="Free/Paid">Free/Paid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div><Label>Image URL</Label><Input value={formData.image_url} onChange={(e) => setFormData({...formData, image_url: e.target.value})} /></div>
                <div><Label>External Link</Label><Input value={formData.external_link} onChange={(e) => setFormData({...formData, external_link: e.target.value})} required /></div>
                <div><Label>Features (one per line)</Label><Textarea value={formData.features} onChange={(e) => setFormData({...formData, features: e.target.value})} /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><Label>Pros (one per line)</Label><Textarea value={formData.pros} onChange={(e) => setFormData({...formData, pros: e.target.value})} /></div>
                  <div><Label>Cons (one per line)</Label><Textarea value={formData.cons} onChange={(e) => setFormData({...formData, cons: e.target.value})} /></div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={formData.is_trending} onChange={(e) => setFormData({...formData, is_trending: e.target.checked})} />
                  <Label>Trending</Label>
                </div>
                <Button type="submit" className="w-full">{editingTool ? "Update" : "Create"} Tool</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader><CardTitle>All Tools</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Pricing</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tools.map((tool) => (
                  <TableRow key={tool.id}>
                    <TableCell className="font-medium">{tool.name} {tool.is_trending && <Badge className="ml-2">Trending</Badge>}</TableCell>
                    <TableCell>{tool.category}</TableCell>
                    <TableCell>{tool.pricing}</TableCell>
                    <TableCell>{tool.average_rating.toFixed(1)} ({tool.total_reviews})</TableCell>
                    <TableCell className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => openEditDialog(tool)}><Pencil className="h-4 w-4" /></Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDelete(tool.id)}><Trash2 className="h-4 w-4" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
