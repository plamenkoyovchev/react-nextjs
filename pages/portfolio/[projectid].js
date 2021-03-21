import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
    const { query } = useRouter();
    const { projectid } = query;

    return (
        <div>
            <h1>The project with id: {`${projectid}`}</h1>
        </div>
    );
};

export default PortfolioProjectPage;