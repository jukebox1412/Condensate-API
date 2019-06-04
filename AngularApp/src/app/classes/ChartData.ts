/**
 * Docs at https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options
 */
export interface ChartData {
    title: string;
    type: string;
    data: Array<Array<string | number>>
    columnNames: string[];
    options: any;
    width: number;
    height: number;
}

/**
 * Returns a ChartData with default width and height and options for Pie. Just give it the title and data
 * @param title 
 * @param data 
 */
export function PieMaker(title: string, data: Array<Array<string | number>>, width = pie_default_width, height = pie_default_height, options = pie_default_options): ChartData {
    let ret: ChartData = {
        title: title,
        data: data,
        type: "PieChart",
        width: width,
        height: height,
        options: options,
        // no columns for pies
        columnNames: ["", ""]
    };

    return ret;
}

export var pie_default_width = 400;
export var pie_default_height = 400;
export var pie_default_options = { pieHole: 0.4 };