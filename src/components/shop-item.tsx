import thumb from '../assets/t-shirt.jpg'

export function ShopItem() {
  return (
    <div className="border border-border rounded-md p-4">
      <img className="rounded w-[300px]" src={thumb} alt="white t-shirt" />
      <div className="space-y-2">
        <span className="text-lg block mt-4 text-muted-foreground">
          Leave the road t-shirt
        </span>
        <strong className="bg-muted p-2 rounded inline-block">12.99 $</strong>
      </div>
    </div>
  )
}
