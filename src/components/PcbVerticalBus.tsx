export const PcbVerticalBus = () => {
  return (
    <aside className="pcb-vertical-bus-spine" aria-hidden="true">
      {/* Multi-lane bus trace lines */}
      <div className="bus-rail-lines">
        <span className="bus-lane lane-1" />
        <span className="bus-lane lane-2" />
        <span className="bus-lane lane-3" />
      </div>

      {/* Test Point 01: Hero / System Init */}
      <div className="pcb-testpoint tp-hero">
        <div className="tp-pad-ring">
          <span className="tp-via-hole" />
        </div>
        <div className="tp-info-badge">
          <span className="tp-id">TP-01</span>
          <span className="tp-signal">SYS_PWR // 3.3V</span>
        </div>
      </div>

      {/* Test Point 02: Featured Projects */}
      <div className="pcb-testpoint tp-featured">
        <div className="tp-pad-ring">
          <span className="tp-via-hole" />
        </div>
        <div className="tp-info-badge">
          <span className="tp-id">TP-02</span>
          <span className="tp-signal">CORE_LOGIC // 100MHz</span>
        </div>
      </div>

      {/* Test Point 03: Macropad Keypad */}
      <div className="pcb-testpoint tp-keypad">
        <div className="tp-pad-ring">
          <span className="tp-via-hole" />
        </div>
        <div className="tp-info-badge">
          <span className="tp-id">TP-03</span>
          <span className="tp-signal">MACROPAD // I2C_BUS</span>
        </div>
      </div>

      {/* Test Point 04: Archive Registry */}
      <div className="pcb-testpoint tp-archive">
        <div className="tp-pad-ring">
          <span className="tp-via-hole" />
        </div>
        <div className="tp-info-badge">
          <span className="tp-id">TP-04</span>
          <span className="tp-signal">ROM_STORE // READ_ONLY</span>
        </div>
      </div>

      {/* Test Point 05: Contacts / Terminus */}
      <div className="pcb-testpoint tp-contact">
        <div className="tp-pad-ring">
          <span className="tp-via-hole" />
        </div>
        <div className="tp-info-badge">
          <span className="tp-id">TP-05</span>
          <span className="tp-signal">COMM_LINK // TX_RX</span>
        </div>
      </div>
    </aside>
  );
};
