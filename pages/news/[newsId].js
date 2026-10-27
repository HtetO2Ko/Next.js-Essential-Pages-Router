// our-domain.com/news/something-important
import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();

  const newsId = router.query.newId;

  return <h1>The Details Page</h1>
}

export default DetailsPage;