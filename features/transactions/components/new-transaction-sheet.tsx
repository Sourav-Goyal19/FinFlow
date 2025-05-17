import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { z } from "zod";
import { useSession } from "next-auth/react";
import { insertTransactionsSchema } from "@/db/schema";
import { Loader2 } from "lucide-react";

import { TransactionForm } from "./transaction-form";
import { useNewTransaction } from "../hooks/use-new-transaction";
import { useCreateTransaction } from "../api/use-create-transaction";

import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { useCreateAccount } from "@/features/accounts/api/use-create-account";
import { useGetCategories } from "@/features/categories/api/use-get-categories";
import { useCreateCategory } from "@/features/categories/api/use-create-category";

const apiFormFields = insertTransactionsSchema.omit({ id: true, userId: true });

type ApiFormValues = z.input<typeof apiFormFields>;

const NewTransactionSheet = () => {
  const { isOpen, onClose } = useNewTransaction();
  const { data } = useSession();

  const accountQuery = useGetAccounts(data?.user?.email!);
  const accountMutation = useCreateAccount(data?.user?.email!);
  const onCreateAccount = (name: string) =>
    accountMutation.mutate({
      name,
    });
  const accountOptions = (accountQuery.data || []).map((account) => ({
    label: account.name,
    value: account.id,
  }));

  const categoryQuery = useGetCategories(data?.user?.email!);
  const categoryMutation = useCreateCategory(data?.user?.email!);
  const onCreateCategory = (name: string) =>
    categoryMutation.mutate({
      name,
    });
  const categoryOptions = (categoryQuery.data || []).map((category) => ({
    label: category.name,
    value: category.id,
  }));

  const transactionMutation = useCreateTransaction(data?.user?.email!);

  const isPending =
    accountMutation.isPending ||
    categoryMutation.isPending ||
    transactionMutation.isPending;

  const isLoading = accountQuery.isLoading || categoryQuery.isLoading;

  const onSubmit = (data: ApiFormValues) => {
    transactionMutation.mutate(data, {
      onSuccess: () => {
        onClose();
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  const defaultValues = {
    accountId: "",
    categoryId: "",
    payee: "",
    amount: "",
    date: new Date(),
    notes: "",
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle> New Transaction </SheetTitle>
          <SheetDescription>Add a new transaction.</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-4 w-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <TransactionForm
            onSubmit={onSubmit}
            disabled={isPending}
            defaultValues={defaultValues}
            accountOptions={accountOptions}
            categoryOptions={categoryOptions}
            onCreateAccount={onCreateAccount}
            onCreateCategory={onCreateCategory}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};

export default NewTransactionSheet;
