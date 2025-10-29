import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const AffordabilityCalculator = () => {
  const [income, setIncome] = useState('');
  const [rent, setRent] = useState('');
  const [utilities, setUtilities] = useState('');
  const [food, setFood] = useState('');
  const [transport, setTransport] = useState('');
  const [otherExpenses, setOtherExpenses] = useState('');

  const calculateAffordability = () => {
    const totalIncome = parseFloat(income) || 0;
    const totalExpenses =
      (parseFloat(rent) || 0) +
      (parseFloat(utilities) || 0) +
      (parseFloat(food) || 0) +
      (parseFloat(transport) || 0) +
      (parseFloat(otherExpenses) || 0);
    
    return totalIncome - totalExpenses;
  };

  const disposableIncome = calculateAffordability();
  const isCalculated = income !== '' || rent !== '' || utilities !== '' || food !== '' || transport !== '' || otherExpenses !== '';

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="default"
          className="w-full sm:w-auto group/btn font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg"
        >
          Calculate Affordability
          <Calculator className="ml-2 w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Affordability Calculator</DialogTitle>
          <DialogDescription>
            Work out your monthly disposable income to see what you can afford to pay towards your debts.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Monthly Income</h3>
            <div className="space-y-2">
              <Label htmlFor="income">Total Monthly Income (after tax)</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="income"
                  type="number"
                  placeholder="0.00"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="pl-7"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
          </div>

          <div className="border-t pt-4 space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Monthly Expenses</h3>
            
            <div className="space-y-2">
              <Label htmlFor="rent">Rent / Mortgage</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="rent"
                  type="number"
                  placeholder="0.00"
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                  className="pl-7"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="utilities">Utilities (Gas, Electric, Water)</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="utilities"
                  type="number"
                  placeholder="0.00"
                  value={utilities}
                  onChange={(e) => setUtilities(e.target.value)}
                  className="pl-7"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="food">Food & Groceries</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="food"
                  type="number"
                  placeholder="0.00"
                  value={food}
                  onChange={(e) => setFood(e.target.value)}
                  className="pl-7"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="transport">Transport (Car, Fuel, Public Transport)</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="transport"
                  type="number"
                  placeholder="0.00"
                  value={transport}
                  onChange={(e) => setTransport(e.target.value)}
                  className="pl-7"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="otherExpenses">Other Expenses (Insurance, Phone, etc.)</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="otherExpenses"
                  type="number"
                  placeholder="0.00"
                  value={otherExpenses}
                  onChange={(e) => setOtherExpenses(e.target.value)}
                  className="pl-7"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
          </div>

          {isCalculated && (
            <div className="border-t pt-4">
              <div className="bg-muted/50 rounded-xl p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Your Monthly Disposable Income</p>
                <p className={`text-4xl font-bold ${disposableIncome >= 0 ? 'text-accent' : 'text-destructive'}`}>
                  £{disposableIncome.toFixed(2)}
                </p>
                {disposableIncome > 0 ? (
                  <p className="text-sm text-muted-foreground mt-3">
                    This is what you could potentially afford to pay towards your debts each month.
                  </p>
                ) : (
                  <p className="text-sm text-destructive mt-3">
                    Your expenses exceed your income. We can help you find a solution.
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="border-t pt-4">
            <p className="text-xs text-muted-foreground text-center">
              This is an estimate only. For a detailed affordability assessment, please contact our team.
            </p>
            <Button 
              variant="premium" 
              size="lg" 
              className="w-full mt-4"
            >
              Get in contact today
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-2">
              May not be suitable in all circumstances. Fees apply. Your credit rating may be affected
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AffordabilityCalculator;
