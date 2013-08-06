require_relative 'spec_helper'
require_relative '../bank'

describe Bank do
  let(:bank) {Bank.new('Wilmington Trust')}

  describe ".new" do
    it "creates a Bank object" do
      expect(bank).to_not eq nil
    end

    it "has 0 accounts on default" do
      expect(bank.accounts.count).to eq(0)
    end
  end

  describe "#name" do
    it "has a bank name" do
      expect(bank.name).to eq 'Wilmington Trust'
    end
  end

  describe "#create_account" do
    it "can create a new account" do
      bank.create_account('Wesley', 100.0)
      expect(bank.accounts.count).to eq 1
    end

    it "saves initial account value" do
      bank.create_account('Wesley', 100.0)
      expect(bank.accounts['Wesley',]).to eq 100.0
    end
  end

  describe "#deposit" do
    it "can deposit more funds to their account" do
      bank.create_account("Person", 200)
      bank.deposit("Person", 300)
      expect(bank.accounts["Person"]).to eq(500)
    end
  end

  describe "#withdraw" do
    it "takes money out of an account" do
      bank.create_account("Person", 200)
      bank.withdraw("Person", 100)
      expect(bank.accounts["Person"]).to eq(100)
    end

    it "doesn't allow overdraft" do
      bank.create_account("Person", 200)
      bank.withdraw("Person", 300)
      expect(bank.accounts["Person"]).to eq(200)
    end

    it "does not allow withdraw of a negative amount" do
      bank.create_account("Person", 200)
      bank.withdraw("Person", -1000)
      expect(bank.accounts["Person"]).to eq(200)
    end

    it "does not allow withdraw from nonexistant accounts" do
      expect(bank.accounts["Anon",100]).to eq(nil)
      expect(bank.accounts["Anon"]).to eq(nil)
    end
  end

  describe "#balance" do
    it "returns the balance of an account" do
      bank.create_account("Person", 500)
      expect(bank.balances["Person"]).to eq(500)
    end
  end
end

