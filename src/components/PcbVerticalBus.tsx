export const PcbVerticalBus = () => {
  return (
    <aside className="pcb-vertical-bus-spine" aria-hidden="true">
      {/* 3-Lane High-Speed Bus Rail */}
      <div className="bus-rail-lines">
        <span className="bus-lane lane-1" />
        <span className="bus-lane lane-2" />
        <span className="bus-lane lane-3" />
      </div>

      {/* Rhythmic PCB Via Stitching Pads along the rail (Zero text overlap) */}
      <div className="pcb-via-cluster via-top">
        <span className="tp-pad-ring"><span className="tp-via-hole" /></span>
      </div>

      <div className="pcb-via-cluster via-mid-1">
        <span className="tp-pad-ring"><span className="tp-via-hole" /></span>
      </div>

      <div className="pcb-via-cluster via-mid-2">
        <span className="tp-pad-ring"><span className="tp-via-hole" /></span>
      </div>

      <div className="pcb-via-cluster via-mid-3">
        <span className="tp-pad-ring"><span className="tp-via-hole" /></span>
      </div>

      <div className="pcb-via-cluster via-bottom">
        <span className="tp-pad-ring"><span className="tp-via-hole" /></span>
      </div>
    </aside>
  );
};
