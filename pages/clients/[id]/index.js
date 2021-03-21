import { useRouter } from "next/router";

const SpecificClientPage = () => {
    const router = useRouter();

    console.log(router.query);
    return (
        <div>
            <h1>SpecificClientPage</h1>
        </div>
    );
};

export default SpecificClientPage;
