import { useRouter } from 'next/router';

const SpecificClientProjectPage = () => {
    const router = useRouter();

    console.log(router.query);
    return (
        <div>
            <h1>SpecificClientProjectPage</h1>
        </div>
    );
};

export default SpecificClientProjectPage;
