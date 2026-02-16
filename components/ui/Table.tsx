import React from "react";

export interface TableHeaderAction {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

interface TableHeaderProps {
  title: string;
  /** Up to 3 icon-only action buttons (e.g. download, duplicate, expand). */
  actionButtons?: TableHeaderAction[];
  /** Optional dropdown for sort/filter (e.g. right-aligned sorter). */
  dropdown?: React.ReactNode;
}

export function TableHeader({ title, actionButtons = [], dropdown }: TableHeaderProps) {
  const buttons = actionButtons.slice(0, 3);
  return (
    <div className="table-header">
      <h2 className="table-header-title">{title}</h2>
      <div className="table-header-actions">
        {buttons.length > 0 && (
          <div className="table-header-buttons">
            {buttons.map((btn, i) => (
              <button
                key={i}
                type="button"
                className="table-header-icon-btn"
                onClick={btn.onClick}
                aria-label={btn.label}
              >
                {btn.icon}
              </button>
            ))}
          </div>
        )}
        {dropdown && <div className="table-header-dropdown">{dropdown}</div>}
      </div>
    </div>
  );
}

interface TableColumn {
  key: string;
  header: string;
  render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode;
}

interface TableProps {
  /** Optional header with title, action buttons, and dropdown. */
  header?: React.ReactNode;
  columns: TableColumn[];
  data: Record<string, unknown>[];
}

export function Table({ header, columns, data }: TableProps) {
  return (
    <div className="table-section">
      {header && <div className="table-header-wrap">{header}</div>}
      <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col.key}>
                  {col.render
                    ? col.render(row[col.key], row)
                    : (row[col.key] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
