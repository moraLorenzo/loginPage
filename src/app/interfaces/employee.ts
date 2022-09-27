/**
 * Setup Employee interface for chart
 */
export interface Employee {
  /**
   * Setup value of x e.g. "Caloocan"
   */
  x: string

  /**
   * Setup value of y e.g. 1200
   */
  y: number

  /**
   * Setup value of id e.g. "12"
   */
  id: string
}
/**
 * Setup Eventdata template
 */
export interface Eventdata{
  /**
   * Owner mock data
   */
  owner: {},
  /**
   * data mock information
   */
  data: {
    address: "Sample Address",
    createdAt: "Sat Jan 01 0101 00:00:00 GMT+0655 (Singapore Standard Time)",
    email : "sample",
    id : "cf48ca9d-9c29-45e1-bf9f-6c413b0bcace",
    image : "sample image",
    jobTitle : "sample",
    name : "sample",
    password :"undefined",
    phone : "sample"
  }
}
/**
 * Setup Deldata template
 */
export interface Deldata{
  /**
   * Owner mock data
   */
   owner: {},
   /**
    * data mock information
    */
  data: {
    address: "Sample Address",
    createdAt: "Sat Jan 01 0101 00:00:00 GMT+0655 (Singapore Standard Time)",
    email : "sample",
    id : 1,
    image : "sample image",
    jobTitle : "sample",
    name : "sample",
    password :"undefined",
    phone : "sample"
  }
}