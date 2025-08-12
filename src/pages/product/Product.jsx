import React from "react";
import CardProduct from "../../components/card/card-product";
import { useCreateProductMutation, useGetProductsQuery } from "../../features/product/productSlice2";
import { getDecryptedAccessToken } from "../../utils/tokenUtils";

export default function Product() {
  // const { data, isLoading, isError } = useGetProductsQuery();
  const [creatProductForm, { data }] = useCreateProductMutation();


  const handleCreateProduct = () => {
    creatProductForm({
      createProduct: {
        name: "Cucumber - Organic",
        description: "Crisp organic cucumbers grown in Siem Reap province. Perfect for fresh salads, traditional ញាំនាង់ and cooling drinks. Pesticide-free and naturally grown.",
        computerSpec: {
          processor: "N/A",
          ram: "N/A",
          storage: "N/A",
          gpu: "N/A",
          os: "N/A",
          screenSize: "N/A",
          battery: "N/A"
        },
        stockQuantity: 280,
        priceIn: 1600,
        priceOut: 2400,
        discount: 15,
        color: [
          {
            color: "Fresh Green",
            images:["https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500"]
          }
        ],
        thumbnail: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=300",
        warranty: "5 Days Freshness Guarantee",
        availability: true,
        images: [
          "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800"
        ],
        categoryUuid: "eb115ca4-a6b2-43f7-aa59-2def7e30dd7b",
        supplierUuid: "fd9d42e3-3afc-43a8-8eb4-7cb4c1c9b411",
        brandUuid: "8620f990-ef33-495c-b38c-236da90c9b46"
      }
      })

  }

  console.log("Data: ", data)


  return (
    <main className="max-w-screen-xl mx-auto">
      <section className="grid grid-cols-4 gap-5">
        {/* {data?.content.map((p, index) => (
          <CardProduct key={index} thumbnail={p.thumbnail} title={p.name} id={p.uuid} />
        ))} */}

        <button onClick={handleCreateProduct} className="border p-2 bg-blue-500">Create Product</button>
      </section>
    </main>
  );
}
