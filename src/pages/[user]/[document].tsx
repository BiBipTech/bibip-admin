import { type NextPage } from "next";
import Image from "next/image";
import { useParams } from "next/navigation";
import { env } from "~/env.mjs";

const UserDocument: NextPage = () => {
  const params = useParams<{
    document: string;
    user: string;
  }>();

  return (
    <div className="flex h-full items-center justify-center">
      <Image
        src={`${env.NEXT_PUBLIC_BIBIP_S3_BUCKET_API_ENDPOINT}/public/${params.user}/belgeler/${params.document}`.replace(
          "+",
          "%2B",
        )}
        width={250}
        height={250}
        alt="document"
      />
    </div>
  );
};

export default UserDocument;
