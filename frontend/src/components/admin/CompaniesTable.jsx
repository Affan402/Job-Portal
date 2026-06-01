import React from "react";
import { Table, TableCaption, TableHead, TableHeader, TableRow } from "../ui/table";

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>I
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
};

export default CompaniesTable;
