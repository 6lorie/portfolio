
import { useState } from "react";

import SlidingCard from "../components/SlidingCard";

import { projects } from "../data/ProjectData";

import PopUp from "../components/PopUp";

export default function Project() {
  const [selected, setSelected] = useState<any>(null);
    return (
        <>
          <section id="project">
              
            <div className="container">

              <SlidingCard
                cards={projects} 
                onSelect={setSelected}
            />
               

            </div>
            
          </section>

            <PopUp data={selected} onClose={() => setSelected(null)} />
        </>
    );
}