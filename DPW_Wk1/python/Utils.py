class Utils:
    @staticmethod
    def calc_mpg(self, fuel_range, fuel_capacity):
        mpg = float(fuel_range/fuel_capacity)
        return mpg
