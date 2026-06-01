import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { toast } from "sonner";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState();
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName }, // JSON body
        { withCredentials: true }, // include cookies if backend uses them
      );
      if (res.data.success) {
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id; // Assuming backend returns the new company's ID
        navigate(`/admin/companies/${companyId}`); // Redirect to the new company's page
      }
    } catch (err) {
      toast .error(err.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company Name</h1>
          <p className="text-gray-500">
            What would you like to give your company name? you can change this
            later.
          </p>
        </div>
        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="JobHunt, Microsoft etc."
        />
        <div className="flex items-center gap-2 my-10">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button className="bg-black text-white" onClick={registerNewCompany}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
