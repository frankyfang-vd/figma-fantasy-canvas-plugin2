// Microsoft Asset Prompt Generator — Plugin Controller

figma.showUI(__html__, {
  width: 480,
  height: 820,
  title: "Asset Prompt Generator",
  themeColors: true
});

figma.ui.onmessage = (msg) => {
  if (msg.type === "close") {
    figma.closePlugin();
  }
  if (msg.type === "notify") {
    figma.notify(msg.message, { timeout: 2000 });
  }
};
