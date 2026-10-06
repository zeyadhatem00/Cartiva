"use client";

import { SendCODE } from "@/app/Services/ForgetPass/SendCode";
import { Verify } from "@/app/Services/ForgetPass/VerifyCode";
import { Button, Form, InputOTP, Spinner } from "@heroui/react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";

export default function VerifyCode({
  setStep,
  email,
}: {
  setStep: Function;
  email: string;
}) {
  const [isComplete, setIsComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  let { control, handleSubmit } = useForm({
    defaultValues: {
      resetCode: "",
    },
  });

  async function SendData(data: { resetCode: string }) {
    setIsSubmitting(true);
    let res = await Verify(data);
    if (res.status == "Success") {
      setStep(3);

      setIsSubmitting(false);
    } else {
      toast.error("Wrong");
      setIsSubmitting(false);
    }
  }
  return (
    <>
      <Form
        className="flex w-full justify-center items-center  flex-col gap-2 mt-8 space-y-5"
        onSubmit={handleSubmit(SendData)}
      >
        <Controller
          name="resetCode"
          control={control}
          render={({ field }) => (
            <InputOTP
              className={`flex justify-center items-center `}
              maxLength={6}
              value={field.value}
              onChange={(val) => {
                field.onChange(val);
                setIsComplete(val.length === 6);
              }}
            >
              <InputOTP.Group>
                <InputOTP.Slot
                  className="rounded-xl border border-[#cbd5e1] bg-[#f3f6fb] text-lg font-bold text-[#151922] shadow-md transition-all focus-within:border-[#2864d7] focus-within:bg-[#eaf1ff] focus-within:ring-4 focus-within:ring-[#2864d7]/15"
                  index={0}
                />
                <InputOTP.Slot
                  className="rounded-xl border border-[#cbd5e1] bg-[#f3f6fb] text-lg font-bold text-[#151922] shadow-md transition-all focus-within:border-[#2864d7] focus-within:bg-[#eaf1ff] focus-within:ring-4 focus-within:ring-[#2864d7]/15"
                  index={1}
                />
                <InputOTP.Slot
                  className="rounded-xl border border-[#cbd5e1] bg-[#f3f6fb] text-lg font-bold text-[#151922] shadow-md transition-all focus-within:border-[#2864d7] focus-within:bg-[#eaf1ff] focus-within:ring-4 focus-within:ring-[#2864d7]/15"
                  index={2}
                />
              </InputOTP.Group>

              <InputOTP.Separator />

              <InputOTP.Group>
                <InputOTP.Slot
                  className="rounded-xl border border-[#cbd5e1] bg-[#f3f6fb] text-lg font-bold text-[#151922] shadow-md transition-all focus-within:border-[#2864d7] focus-within:bg-[#eaf1ff] focus-within:ring-4 focus-within:ring-[#2864d7]/15"
                  index={3}
                />
                <InputOTP.Slot
                  className="rounded-xl border border-[#cbd5e1] bg-[#f3f6fb] text-lg font-bold text-[#151922] shadow-md transition-all focus-within:border-[#2864d7] focus-within:bg-[#eaf1ff] focus-within:ring-4 focus-within:ring-[#2864d7]/15"
                  index={4}
                />
                <InputOTP.Slot
                  className="rounded-xl border border-[#cbd5e1] bg-[#f3f6fb] text-lg font-bold text-[#151922] shadow-md transition-all focus-within:border-[#2864d7] focus-within:bg-[#eaf1ff] focus-within:ring-4 focus-within:ring-[#2864d7]/15"
                  index={5}
                />
              </InputOTP.Group>
            </InputOTP>
          )}
        />
        <Button
          className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2864d7] text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_10px_20px_rgba(40,100,215,0.2)] transition-all hover:bg-[#151922] active:scale-[0.98]"
          isDisabled={!isComplete}
          isPending={isSubmitting}
          type="submit"
          variant="primary"
        >
          {isSubmitting ? (
            <>
              <Spinner color="current" size="sm" />
              Verifying...
            </>
          ) : (
            "Verify Code"
          )}
        </Button>
        <p className=" flex items-center justify-center gap-2 pt-2 text-xs text-[#8a929f]">
          Didn't Recieve A code ?{" "}
          <span
            onClick={async () => {
              let res = await SendCODE({ email: email });
              if (res.statusMsg == "success") {
                setStep(2);
                toast.success(res.message);
              } else {
                toast.error(res.message);
              }
            }}
            className="font-black cursor-pointer text-[#2864d7] hover:underline hover:text-[#151922]"
          >
            Resend Code
          </span>
        </p>
      </Form>
    </>
  );
}
