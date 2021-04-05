import React, { useEffect, useState } from "react";

export const Testimonials = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://apps.elfsight.com/p/platform.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="reviews">
            <h2>Our Happy Customers</h2>
            <div class="elfsight-app-90659a06-d5a2-4aa2-83a7-436b2ee34a0d"></div>
        </section>
    );
};
