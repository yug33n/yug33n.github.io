interface SectionPcbDividerProps {
  segmentCode: string;
  busSpec: string;
}

export const SectionPcbDivider = ({ segmentCode, busSpec }: SectionPcbDividerProps) => {
  return (
    <div className="pcb-section-divider-bar" aria-hidden="true">
      <div className="pcb-divider-trace">
        <span className="pcb-via-annular" />
        <span className="pcb-trace-groove" />
        <div className="pcb-divider-label">
          <span className="bus-id-text">{segmentCode}</span>
          <span className="bus-spec-text">{busSpec}</span>
        </div>
        <span className="pcb-trace-groove" />
        <span className="pcb-via-annular" />
      </div>
    </div>
  );
};
