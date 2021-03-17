class Currency:

    def __init__(self, name, home_nation, price, quantity):
        self.name = name
        self.home_nation = home_nation
        self.price = price
        self.quantity = quantity

    def mod_quantity(self, quant):
        self.quantity += quant

    def list_stats(self):
        print(
            f"Currency Name: {self.name},\nPrice: {self.price},\nHome Nation: {self.home_nation}\nQuantity: {self.quantity}")


yen = Currency('Yen', 'Japan', 12, 20)
usd = Currency('US Dollar', 'US', 1, 30)
swd = Currency('Krona', 'Sweden', 23, 9)

yen.list_stats()
usd.list_stats()
swd.list_stats()

yen.mod_quantity(10)
yen.list_stats()


class Sub_Currency(Currency):

    # super / init additions are broken
    # def __init__(self, name, home_nation, price, quanitity, volatility):
    #     super().__init__(self, name, home_nation, price, quantity)
    #     self.volatility = volatility

    def list_stats(self):
        # super.list_stats(self)
        print(f"\nVolatility: {self.volatility}")


nada = Sub_Currency("h", "rcon", 22, 3, "super")

nada.list_stats()
