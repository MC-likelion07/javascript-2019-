class Animal:
    def __init__(self, leg):
        self.leg = leg
    def printAnimal(self):
        print(self.name + "은 " + str(self.leg) + "개의 다리를 가진다")


class Lion(Animal):
    def __init__(self, name, leg):
        super().__init__(leg)   
        self.name = name 
        # self는 전달된 객체
        # self.name은 인스턴스 변수
    def getName(self):
        print("내 이름은 " + self.name)

myLion = Lion("King", 4)
myLion.getName()
myLion.printAnimal()
