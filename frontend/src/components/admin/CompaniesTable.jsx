import React, { useEffect, useMemo, useState } from "react";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "../ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { MoreHorizontal, Edit2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import { setcompanies } from "@/redux/companySlice";
import Companies from "./Companies";

const CompaniesTable = () => {
  const { companies, searchCompanyByText } = useSelector((store) => store.company);
  
  const filterCompanies = useMemo(() => {
    return companies.filter((c) => {
      if (!searchCompanyByText) return true;
      return c.name.toLowerCase().includes(searchCompanyByText.toLowerCase());
    })
  }, [companies, searchCompanyByText]);

  const [editingCompany, setEditingCompany] = useState(null);
  const [form, setForm] = useState({ name: "", logo: "" });

  const openEdit = (company) => {
    setEditingCompany(company);
    setForm({ name: company.name, logo: company.logo });
  };

  const closeEdit = () => {
    setEditingCompany(null);
  };

  const submitEdit = (e) => {
    e.preventDefault();
    setcompanies((prev) =>
      prev.map((c) =>
        c.id === editingCompany.id
          ? { ...c, name: form.name, logo: form.logo }
          : c,
      ),
    );
    closeEdit();
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompanies?.length <= 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-gray-500">
                No companies found. Please create a company first.
              </TableCell>
            </TableRow>
          ) : (
            <>
              {filterCompanies?.map((c) => {
                return (
                    <TableRow key={c.id}> 
                    <TableCell>
                      <Avatar>
                        <AvatarImage src={c.logo} alt={c.name} />
                        <AvatarFallback>{c.name}</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell>{c.name}</TableCell>
                    <TableCell>{c.createdAt}</TableCell>
                    <TableCell className="text-right">
                      <Popover>
                        <PopoverTrigger asChild>
                          <button className="p-2 rounded-full hover:bg-gray-100">
                            <MoreHorizontal />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-32">
                          <button
                            onClick={() => openEdit(c)}
                            className="flex items-center gap-2 w-full text-left"
                          >
                            <Edit2 className="w-4 h-4" />
                            <span>Edit</span>
                          </button>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                    </TableRow>
                );
              })}
            </>
          )}
        </TableBody>
      </Table>

      <Dialog
        open={Boolean(editingCompany)}
        onOpenChange={(open) => {
          if (!open) closeEdit();
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Company</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitEdit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Name</Label>
              <Input
                className="col-span-3"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Logo URL</Label>
              <Input
                className="col-span-3"
                type="file" accept="image/*" onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={closeEdit}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CompaniesTable;
