"use client";
import dynamic from "next/dynamic";

const Spline = dynamic(
  () => import("@splinetool/react-spline").then((mod) => mod.default),
  { ssr: false }
);

export default function SplineObject() {
  function onLoad(spline: any) {
    try {
      const sphere =
        spline.findObjectByName?.("MainSphere") ||
        spline.findObjectByName?.("Sphere") ||
        spline.findObjectByName?.("mainSphere");

      if (!sphere) {
        // Fallback: try to find any node with "sphere" in its name inside the scene
        const maybeSphere = spline?.scene?.children?.find((n: any) =>
          `${n.name || ""}`.toLowerCase().includes("sphere")
        );
        if (maybeSphere) {
          maybeSphere.rotation = maybeSphere.rotation || { x: 0, y: 0, z: 0 };
          maybeSphere.rotation.y = (maybeSphere.rotation.y || 0) + 1;
          return;
        }

        console.warn("SplineObject: 'MainSphere' not found on load.", {
          spline,
        });
        return;
      }

      sphere.rotation = sphere.rotation || { x: 0, y: 0, z: 0 };
      sphere.rotation.y = (sphere.rotation.y || 0) + 1;
    } catch (err) {
      console.error("SplineObject onLoad error:", err);
    }
  }

  return (
    <main className="w-full h-full">
      <Spline
        scene="https://prod.spline.design/EiUBFNSXgMUERVRA/scene.splinecode"
        onLoad={onLoad}
      />
    </main>
  );
}
