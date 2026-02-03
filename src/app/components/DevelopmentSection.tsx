import DevelopmentCard from "./DevelopmentCard";

export default function DevelopmentSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
        In Development
      </h2>
      <DevelopmentCard
        title="NHL Data Analytics Pipeline"
        description="An NHL analytics pipeline that processes raw leage data courtesy of
        NHL.com and MoneyPuck.com turning it into structured datasets and
        exposes them to an API for front-end visualization."
        features={[
          "Python",
          "Pandas",
          "FastAPI",
          "Data Science",
          "Data Visualization",
        ]}
        url="/nhl-stats"
      />
    </section>
  );
}
