import { toast } from "sonner";
export const showDevelopmentToast = () => {
  toast("Currently not available!", {
    description: "This feature is currently still in development",
    position: "top-left",
    duration: 3000,
    action: {
      label: "Close",
      onClick: () => console.log("Closed"),
    },
    actionButtonStyle: {
      fontSize: "16px",
      height: "2.5rem",
      width: "4rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ABCE8E",
      marginRight: "0.5rem"
    },
    // closeButton: true,
    style: {
      width: "400px",
      height: "100px",
      padding: "16px",
      fontSize: "16px",
    },
    className: "group",
  });
};
