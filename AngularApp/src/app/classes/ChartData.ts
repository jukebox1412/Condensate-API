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
export var pie_default_options = {
    legend: 'none',
    pieHole: 0.4,
    titleTextStyle: {
        color: "#454522",
        fontName: "Helvetica",
        fontSize: 18,
        bold: true,
        italic: false
    },
    // from https://www.color-hex.com/color-palette/78881
    colors: ['#191738', '#233253', '#1f565d', '#2d7a58', '#3f8f50'],
    pieSliceTextStyle: { fontName: "Helvetica", fontSize: 14, bold: true }
};