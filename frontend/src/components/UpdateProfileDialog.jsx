import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { Loader2 } from "lucide-react";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(store => store.auth);
  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.join(", ") || "",
    file: ""  
  })

  const changeEventHandler = (e) => {
    setInput({...input, [e.target.name]:e.target.value});
  }

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({...input, file});
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] bg-white z-60">
        <DialogHeader>
          <DialogTitle>Update Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={submitHandler}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-3" name="fullname" type="text" value={input.fullname} onChange={changeEventHandler} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" className="col-span-3" name="email" type="email" value={input.email} onChange={changeEventHandler} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="number" className="text-right">
                Number
              </Label>
              <Input id="number" className="col-span-3" name="phoneNumber" type="tel" value={input.phoneNumber} onChange={changeEventHandler} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="bio" className="text-right">
                Bio
              </Label>
              <Input id="bio" className="col-span-3" name="bio" type="text" value={input.bio} onChange={changeEventHandler} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="skills" className="text-right">
                Skills
              </Label>
              <Input id="skills" className="col-span-3" name="skills" type="text" value={input.skills} onChange={changeEventHandler} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="file" className="text-right">
                Resume
              </Label>
              <Input
                id="file"
                className="col-span-3"
                name="file"
                type="file"
                accept="application/pdf"
                onChange={fileChangeHandler}
              />
            </div>
          </div>
          <DialogFooter>
            {loading ? (
              <Button className="w-full my-4 bg-black text-white">
                {" "}
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait{" "}
              </Button>
            ) : (
              <Button type="submit" className="w-full my-4 bg-black text-white">
                Update
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileDialog;
