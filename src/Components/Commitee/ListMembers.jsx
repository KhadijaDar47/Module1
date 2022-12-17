import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";
import React from "react";

export default function ListMember(props) {

  return (
    <Card className="w-100">
      <CardBody className="">
        <div>
          <div className="w-full bg-white px-10">
            <div className="md:flex items-center border-b pb-6 border-gray-200">
              <h1 className="focus:outline-none text-3xl font-bold text-gray-800 mt-2">
                Commitee Members List
              </h1>
              <ul className="todo-list">

                <li>
                  {console.log(props.Mlist)}
                </li>

              </ul>
            </div>

          </div>
        </div>
      </CardBody>
      <CardFooter divider className="flex items-center  py-3">
        <Button className="px=32" color="green" fullWidth>Confirm Commitee</Button>
      </CardFooter>
    </Card>
  );
}