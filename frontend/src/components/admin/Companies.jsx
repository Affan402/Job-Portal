import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";

const Companies = () => {
    const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto my-10 px-4 md:px-8">
      <div className="flex items-center justify-between my-5">
        <Input className="w-fit" placeholder="Filter by name" />
        <Button className="bg-black hover:bg-blue-600 text-white" onClick={() => navigate("/admin/companies/create")}>
          New Company
        </Button>
      </div>
      <CompaniesTable />
    </div>
  );
};

export default Companies;
