import { Button } from "@/components/ui/button";
import { IUser } from "@/types";

const UserCard = ({user} : {user : IUser}) => {
    return (
        <div className="border-2 p-5 mb-10 border-blue-500 flex justify-between items-center">
            {user?.name}
            <Button className="bg-red-500 hover:bg-red-700">Delete</Button>
        </div>
    );
};

export default UserCard;