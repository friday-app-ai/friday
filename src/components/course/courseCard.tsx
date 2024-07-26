import { useRouter } from "next/navigation";

interface IProp {
  bannerName: string;
  bannerColor: string;
  courseName: string;
  _id: string;
}
export default function CourseCard({
  courseName,
  bannerName,
  bannerColor,
  _id,
}: IProp) {
  const router = useRouter();
  const handelClick = () => {
    router.push(`/courses/${_id}`);
  };
  return (
    <div
      className="flex flex-col items-center gap-3 cursor-pointer"
      onClick={handelClick}
    >
      <div
        className="rounded-md grid place-items-center w-[300px] h-[200px] text-3xl text-white text-center"
        style={{ background: bannerColor }}
      >
        {bannerName}
      </div>
      <p>{courseName}</p>
    </div>
  );
}
