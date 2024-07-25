
interface CoursePageProps {
    params: {
        courseSlug: string
    }
}
export default function CoursePage({params}:CoursePageProps) {
    return <div>Course Page- {params.courseSlug}</div>;
}