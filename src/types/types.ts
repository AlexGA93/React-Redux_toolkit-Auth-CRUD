import { GridColDef } from "@mui/x-data-grid";

export interface BrowserRouterRoute {
    id?:string;
    path: string;
    element: JSX.Element;
    children?: BrowserRouterRoute[]
}

export interface listItemType {
    id: number,
    title: string;
    url: string;
    icon: string;
}
export interface menuItemType {
    id: number;
    title: string;
    listItems: listItemType[]
}

export interface topDealUserType {
    id: number;
    img: string;
    username: string;
    email: string;
    amount: string;
}

export interface chartDataType {
    name: string;
    users?: number;
    products?: number;
    revenue?: number;
    ratio?: number;
}

export interface chartBoxType {
    color: string;
    icon: string;
    title: string;
    number: number | string;
    dataKey: string;
    percentage: number;
    chartData: chartDataType[]
}

export interface chartData {
    name: string;
    profit?: number;
    visit?: number;
}

export interface barChartBoxRevenueType {
    title: string;
    color: string;
    dataKey: string;
    chartData: chartData []
}

export interface PieDataType {
    name: string;
    value: number;
    color: string;
}

export interface AreaDataType {
    name: string;
    books: number;
    clothes: number;
    electronic: number
}

export interface UserRowType {
    id: number;
    img: string;
    lastName: string;
    firstName: string;
    email: string;
    phone: string;
    createdAt: string;
    verified?: boolean;
}

export interface ProductType {
    id: number,
    img: string;
    title: string;
    color: string;
    producer: string;
    price: string;
    createdAt: string;
    inStock?: boolean;
}

export interface UserTypeInfo {
    username: string;
    fullname: string;
    email: string;
    phone: string;
    status: string;
}

export interface UserTypeChartDataKey {
    name: string;
    color: string;
}

export interface TypeChartData {
    name: string;
    visits: number;
    clicks?: number;
    orders?: number;
}

export interface UserTypeChart{
    dataKeys: UserTypeChartDataKey[];
    data: TypeChartData[];
}

export interface UserTypeActivity {
    text: string;
    time: string;
}

export interface ProductTypeInfo {
    productId: string;
    color: string;
    price: string;
    producer: string;
    export: string;
}

export interface singleType {
    id: number;
    title: string;
    img: string;
    info: UserTypeInfo | ProductTypeInfo;
    chart: UserTypeChart;
    activities: UserTypeActivity[];
}

export interface PropTypes {
    columns: GridColDef[];
    rows?: object[];
    slug: string;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export interface LoginFormType {
    email: string;
    password: string;
  }
