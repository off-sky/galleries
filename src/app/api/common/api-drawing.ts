
export enum ApiMaterials {
    OIL_ON_CANVAS='oil_on_canvas',
    OIL_ON_POPLAR_PAPER = 'oil_on_poplar_panel',
}
export interface ApiDrawing {
    id: string;
    name: string;
    material: ApiMaterials;
    url: string;
    dates: string;
}
