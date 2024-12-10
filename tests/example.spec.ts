import { test, expect, type Page} from '@playwright/test';
import {HomePage} from './example.po'


test('has title', async ({ page }) => {
  await page.goto('/todos?q=in-progress');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/TestAtomizer/);
});


test('default taks render', async({page})=>{

  await page.goto('/todos?q=in-progress');
  const listItems = page.locator('app-todos').getByRole('listitem')
  await expect(listItems).toHaveCount(3)
})

test('completed tab changes url', async({page})=>{
  await page.goto('/todos?q=in-progress');
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.waitForURL('/todos?q=completed')


  const listItems = page.locator('app-todos').getByRole('listitem')
  await expect(listItems).toHaveCount(0)

})

test('all tab changes url', async({page})=>{
  await page.goto('/todos?q=in-progress');
  await page.getByRole('link', { name: 'All' }).click();
  await page.waitForURL('/todos?q=all')


  const listItems = page.locator('app-todos').getByRole('listitem')
  await expect(listItems).toHaveCount(3)

})

test('toggle test', async ({ page }) => {
  await page.goto('/todos?q=in-progress');
  await page.locator('li').filter({ hasText: 'Atomize Tests' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();

  await page.waitForURL('/todos?q=completed')
  const listItems = page.locator('app-todos').getByRole('listitem')
  await expect(listItems).toHaveCount(3)
});
