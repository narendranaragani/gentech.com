import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { allProjects } from "@/data/projects";
import { ProjectDetail } from "@/components/ProjectDetail";

export const Route = createFileRoute("/work/$projectId")({
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { projectId } = useParams({ from: "/work/$projectId" });
  const project = allProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8 text-center">
        <h1 className="text-4xl font-bold">Project not found</h1>
        <p className="mt-4 text-muted-foreground">The project you're looking for doesn't exist.</p>
        <Link to="/work" className="mt-8 text-primary underline underline-offset-4">
          Back to all work
        </Link>
      </div>
    );
  }

  return <ProjectDetail project={project} />;
}
