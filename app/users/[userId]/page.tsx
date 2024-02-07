interface UserIdPageProps {
    params: {
        userId: String;
    };
};

const Page = ({params} : UserIdPageProps) => {
    return (
        <div>
            Testing [folder] routing -- dynamic routing
            User ID : {params.userId}
        </div>
    );
};

export default Page;
