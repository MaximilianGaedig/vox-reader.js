declare const parseVoxChunk: (id: string, contentData: Array<number>) => {
    numModels: any;
    x?: undefined;
    y?: undefined;
    z?: undefined;
    numVoxels?: undefined;
    values?: undefined;
    id?: undefined;
    materialType?: undefined;
    materialWeight?: undefined;
    propertyBits?: undefined;
    normalizedPropertyValues?: undefined;
} | {
    x: any;
    y: any;
    z: any;
    numModels?: undefined;
    numVoxels?: undefined;
    values?: undefined;
    id?: undefined;
    materialType?: undefined;
    materialWeight?: undefined;
    propertyBits?: undefined;
    normalizedPropertyValues?: undefined;
} | {
    numVoxels: any;
    values: any;
    numModels?: undefined;
    x?: undefined;
    y?: undefined;
    z?: undefined;
    id?: undefined;
    materialType?: undefined;
    materialWeight?: undefined;
    propertyBits?: undefined;
    normalizedPropertyValues?: undefined;
} | {
    values: any;
    numModels?: undefined;
    x?: undefined;
    y?: undefined;
    z?: undefined;
    numVoxels?: undefined;
    id?: undefined;
    materialType?: undefined;
    materialWeight?: undefined;
    propertyBits?: undefined;
    normalizedPropertyValues?: undefined;
} | {
    id: any;
    materialType: any;
    materialWeight: any;
    propertyBits: any;
    normalizedPropertyValues: any;
    numModels?: undefined;
    x?: undefined;
    y?: undefined;
    z?: undefined;
    numVoxels?: undefined;
    values?: undefined;
} | {
    id: string;
    values: number[];
    numModels?: undefined;
    x?: undefined;
    y?: undefined;
    z?: undefined;
    numVoxels?: undefined;
    materialType?: undefined;
    materialWeight?: undefined;
    propertyBits?: undefined;
    normalizedPropertyValues?: undefined;
};
export = parseVoxChunk;
