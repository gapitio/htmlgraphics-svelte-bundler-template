type EditorCodeType = string | undefined;

export interface OptionsInterface {
  add100Percentage: boolean;
  centerAlignContent: boolean;
  overflow: "visible" | "auto" | "overlay" | "hidden";
  SVGBaseFix: boolean;
  rootCSS: EditorCodeType;
  css: EditorCodeType;
  html: EditorCodeType;
  renderOnMount: boolean;
  panelupdateOnMount: boolean;
  onRender: EditorCodeType;
  dynamicData: boolean;
  dynamicFieldDisplayValues: boolean;
  dynamicProps: boolean;
  dynamicHtmlGraphics: boolean;
  onInitOnResize: boolean;
  onInit: EditorCodeType;
  codeData: EditorCodeType;
  reduceOptions: ReduceDataOptions;
  calcsMutation: CalcsMutation;
}
