import { useRouter } from "next/router";

const BlogPostsPage = () => {
    const router = useRouter();
    console.log(router);

    return (
        <div>
            <h1>BlogPostsPage</h1>
        </div>
    );
};

export default BlogPostsPage;
