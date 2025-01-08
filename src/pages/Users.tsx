import AddUserModal from "@/module/user/AddUserModal";
import UserCard from "@/module/user/UserCard";
import { useAppSelector } from "@/redux/features/counter/hooks";
import { selectUser } from "@/redux/features/user/userSlice";


const Users = () => {

    const users = useAppSelector(selectUser)


  return (
    <div className="max-w-7xl px-5 mx-auto">
      <div className="flex justify-end">
            <AddUserModal></AddUserModal>
      </div>
        <div className="grid grid-cols-4 gap-5 mt-5 mb-10">
            {
                users?.map(user => <UserCard key={user?.id} user={user}></UserCard>)
            }
            
        </div>
    </div>
  );
};

export default Users;
