/**
 * Initialize interface Product
 */
export interface Product {
    /**
     * Set of string type
     */
    createdAt: string

    /**
     * Set of string type
     */
    product_name: string

    /**
     * Set of string type
     */
    product_price: string

    /**
     * Set of string type
     */
    product_adj: string

    /**
     * Set of string type
     */
    product_material: string

    /**
     * Set of string type
     */
    product_desc: string

    /**
     * Set of string type
     */
    producer: string

    /**
     * Set of string type
     */
    city: string

    /**
     * Set of string type
     */
    country: string

    /**
     * Set of string type
     */
    id: string
  }

  /**
   * Initialize Visible interface
   */
export interface Visible {
  /**
   * Set of boolean type
   */
  visible: boolean
}