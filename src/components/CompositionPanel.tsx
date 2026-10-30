type CompositionPanelProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function CompositionPanel({ header, children, footer }: CompositionPanelProps) {
  return (
    <section>
      <header>{header}</header>
      <div>{children}</div>
      {footer && <footer>{footer}</footer>}
    </section>
  );
}
