import { HttpResponse, http } from "msw";

export const handlers = [
	// test
	http.get("/api/product/list", async () => {
		return HttpResponse.json({
			product: Array.from({ length: 10 }, (_, index) => ({
				id: index + 1,
				name: `Product ${index + 1}`,
				price: 10000,
				image: `https://via.placeholder.com/150?text=Product+${index + 1}`,
			})),
		});
	}),
];
