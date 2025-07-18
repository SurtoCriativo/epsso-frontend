interface SpinnerLoaderProps {
  message: string;
}
export default function SpinnerLoader({ message }: SpinnerLoaderProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <style>
        {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
      </style>
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "4px solid #f3f3f3",
          borderTop: "4px solid #7fbc53",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <div style={{ fontSize: "1.1rem", color: "#666" }}>{message}</div>
    </div>
  );
}
