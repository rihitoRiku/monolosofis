import { toast } from "sonner";
export const showDevelopmentToast = () => {
  toast("Oops!", {
    description: (
      <span className="text-black text-sm">
        This feature is currently still in development
      </span>
    ),
    descriptionClassName: "text-red-500",
    position: "top-left",
    duration: 3000,
    action: {
      label: "close",
      onClick: () => console.log("Closed"),
    },
    actionButtonStyle: {
      fontSize: "16px",
      height: "2.5rem",
      width: "4rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#382110",
      marginRight: "0.5rem",
      color: "#fff",
    },
    // closeButton: true,
    style: {
      width: "400px",
      height: "100px",
      padding: "16px",
      fontSize: "16px",
      backgroundColor: "#fff",
      boxShadow: "none",
      color: "black",
    },
  });
};
