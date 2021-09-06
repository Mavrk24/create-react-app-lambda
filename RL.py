import matplotlib.pyplot as plt
import numpy as np
from scipy import stats

Coeff = []
vhigh=[]
high=[]
med=[]
weak=[]
none=[]
x = [0,1,2,3,4,5,6,7,8]

def coeff():
    X = np.random.randint(-1,2,size=50)
    y= np.random.randint(10,size=50)
    pcc = stats.pearsonr(X,y)
    Coeff.append(pcc[0])

def numerate(arr):
    return list(range(len(arr)))

for i in range(9):
    coeff()
vhigh_i = []
high_i = []
med_i = []
weak_i = []
none_i = []
for i in Coeff:
    if np.absolute(i)>=0.9:
        vhigh.append(i)
        vhigh_i.append(Coeff.index(i))
    elif np.absolute(i)>=0.7:
        high.append(i)
        high_i.append(Coeff.index(i))
    elif np.absolute(i)>=0.7:
        med.append(i)
        med_i.append(Coeff.index(i))
    elif np.absolute(i)>=0.3:
        weak.append(i)
        weak_i.append(Coeff.index(i))
    else:
        none.append(i)
        none_i.append(Coeff.index(i))

plt.scatter(vhigh_i,vhigh, color="turquoise")
plt.scatter(high_i,high, color="gold")
plt.scatter(med_i,med, color="orange")
plt.scatter(weak_i,weak, color="firebrick", marker='X')
plt.scatter(none_i,none, color="black")
plt.plot(x,Coeff, '--', color='gray')
plt.title('Pearson\'s Corelation Coefficient (of workplace questionaire)')
plt.show()
print(vhigh,high,med,weak,none,weak_i,none_i)