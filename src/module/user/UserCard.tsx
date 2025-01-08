import { Button } from "@/components/ui/button";
import { DeleteUser } from "@/redux/features/user/userSlice";
import { IUser } from "@/types";
import { useDispatch } from "react-redux";

const UserCard = ({user} : {user : IUser}) => {
    const dispatch = useDispatch();
    const handleUserDelete = (id : string) => {
        dispatch(DeleteUser(id))
    }


    return (
        <div className="border-2 p-5 border-blue-500 rounded-md flex justify-between items-center">
            {user?.name}
            <Button onClick={()=>handleUserDelete(user?.id)} className="bg-red-500 hover:bg-red-700">Delete</Button>
        </div>
    );
};

export default UserCard;